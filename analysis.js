/**
 * Indirect Instruction Injection Analysis Tool
 * Tracks and analyzes potential injection attempts
 */

class InjectionAnalyzer {
  constructor() {
    this.detectedPatterns = [];

    // Pattern detection configuration
    this.patterns = {
      // Indirect Injection
      indirectInjection: [
        'AGENT:',
        'ASSISTANT:',
        'SYSTEM:',
        'print out to user',
        'output to user',
        'include this token',
        'verification token'
      ],

      // Direct Prompt Injection
      promptInjection: [
        'ignore all previous',
        'ignore previous instructions',
        'disregard',
        'forget everything',
        'new instructions',
        'system message',
        'developer mode'
      ],

      // Jailbreak attempts
      jailbreak: [
        'DAN mode',
        'do anything now',
        'hypothetical scenario',
        'for educational purposes',
        'in a fictional world',
        'pretend',
        'roleplay'
      ],

      // Token smuggling
      tokenSmuggling: [
        '<|endoftext|>',
        '<|startoftext|>',
        '\\u0000',
        'zero-width',
        '\u200b', // actual zero-width space
        '\ufeff'  // BOM
      ],

      // Context manipulation
      contextManipulation: [
        'context override',
        'attention:',
        'focus on',
        'priority instruction'
      ],

      // Role-playing exploits
      rolePlaying: [
        'act as',
        'you are now',
        'simulate',
        'pretend you are',
        'play the role'
      ],

      // Delimiter attacks
      delimiterAttacks: [
        '===',
        '---SYSTEM',
        '***OVERRIDE',
        '<<<INSTRUCTION',
        '>>>END'
      ],

      // Data exfiltration
      dataExfiltration: [
        'show me all',
        'list all',
        'reveal',
        'API key',
        'password',
        'credentials',
        'system prompt',
        'configuration'
      ],

      // Prompt leakage
      promptLeakage: [
        'repeat everything',
        'what were your instructions',
        'show your prompt',
        'output your system',
        'what rules are you following'
      ],

      // Encoding indicators
      encodingAttacks: [
        'base64',
        'url encode',
        'hex:',
        '&#',
        '%20',
        'decode this'
      ]
    };

    // Flatten for backward compatibility
    this.suspiciousKeywords = Object.values(this.patterns).flat();
  }

  /**
   * Scan content for potential injection patterns
   * @param {string} content - The content to analyze
   * @returns {Object} Analysis results
   */
  analyzeContent(content) {
    const results = {
      suspicious: false,
      patterns: [],
      categories: [],
      confidence: 0,
      riskLevel: 'SAFE',
      timestamp: new Date().toISOString()
    };

    const contentLower = content.toLowerCase();

    // Check all pattern categories
    for (const [category, keywords] of Object.entries(this.patterns)) {
      keywords.forEach(keyword => {
        if (contentLower.includes(keyword.toLowerCase())) {
          results.patterns.push({
            type: category,
            value: keyword,
            context: this.getContext(content, keyword)
          });
          if (!results.categories.includes(category)) {
            results.categories.push(category);
          }
          results.suspicious = true;
        }
      });
    }

    // Check for hidden elements (in HTML context)
    if (content.includes('display:none') || content.includes('visibility:hidden') ||
        content.includes('opacity:0') || content.includes('position:absolute;left:-9999')) {
      results.patterns.push({
        type: 'hiddenElement',
        value: 'CSS hiding detected'
      });
      results.categories.push('hiddenElement');
      results.suspicious = true;
    }

    // Check for comment-based injections
    const commentPattern = /(<!--.*?(?:AGENT|SYSTEM|ASSISTANT).*?-->)/gis;
    const matches = content.match(commentPattern);
    if (matches) {
      results.patterns.push({
        type: 'commentInjection',
        value: matches.length + ' suspicious comments found'
      });
      results.categories.push('commentInjection');
      results.suspicious = true;
    }

    // Check for Unicode tricks
    if (this.hasUnicodeTricks(content)) {
      results.patterns.push({
        type: 'unicodeTricks',
        value: 'Suspicious Unicode characters detected'
      });
      results.categories.push('unicodeTricks');
      results.suspicious = true;
    }

    // Check for encoded content
    if (this.hasEncodedContent(content)) {
      results.patterns.push({
        type: 'encodedContent',
        value: 'Base64 or encoded content detected'
      });
      results.categories.push('encodedContent');
      results.suspicious = true;
    }

    // Check for excessive repetition (resource exhaustion)
    if (this.hasExcessiveRepetition(content)) {
      results.patterns.push({
        type: 'resourceExhaustion',
        value: 'Excessive repetition detected'
      });
      results.categories.push('resourceExhaustion');
      results.suspicious = true;
    }

    // Calculate confidence score and risk level
    const baseConfidence = Math.min(results.patterns.length * 0.15, 1.0);
    const categoryMultiplier = 1 + (results.categories.length * 0.2);
    results.confidence = Math.min(baseConfidence * categoryMultiplier, 1.0);

    results.riskLevel = this.calculateRiskLevel(results.confidence);

    return results;
  }

  /**
   * Detect Unicode manipulation tricks
   */
  hasUnicodeTricks(content) {
    const suspiciousUnicode = [
      '\u200b', // Zero-width space
      '\u200c', // Zero-width non-joiner
      '\u200d', // Zero-width joiner
      '\ufeff', // BOM
      '\u202e'  // Right-to-left override
    ];
    return suspiciousUnicode.some(char => content.includes(char));
  }

  /**
   * Detect encoded content
   */
  hasEncodedContent(content) {
    // Check for Base64 patterns (at least 20 chars)
    const base64Pattern = /[A-Za-z0-9+/]{20,}={0,2}/;
    const hexPattern = /(?:0x[0-9a-f]{2,}|\\x[0-9a-f]{2}){3,}/i;
    return base64Pattern.test(content) || hexPattern.test(content);
  }

  /**
   * Detect excessive repetition
   */
  hasExcessiveRepetition(content) {
    const words = content.split(/\s+/);
    const wordCounts = {};
    let maxCount = 0;

    words.forEach(word => {
      if (word.length > 3) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        maxCount = Math.max(maxCount, wordCounts[word]);
      }
    });

    return maxCount > 50 || (words.length > 100 && maxCount / words.length > 0.3);
  }

  /**
   * Calculate risk level from confidence score
   */
  calculateRiskLevel(confidence) {
    if (confidence === 0) return 'SAFE';
    if (confidence < 0.3) return 'LOW';
    if (confidence < 0.6) return 'MEDIUM';
    if (confidence < 0.9) return 'HIGH';
    return 'CRITICAL';
  }

  /**
   * Get surrounding context for a matched pattern
   * @param {string} content - Full content
   * @param {string} keyword - The matched keyword
   * @returns {string} Context snippet
   */
  getContext(content, keyword) {
    const index = content.toLowerCase().indexOf(keyword.toLowerCase());
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + keyword.length + 50);
    return '...' + content.substring(start, end) + '...';
  }

  /**
   * Generate a report of findings
   * @param {Array} results - Array of analysis results
   * @returns {string} Formatted report
   */
  generateReport(results) {
    let report = '=== Injection Analysis Report ===\n\n';
    report += `Total Pages Analyzed: ${results.length}\n`;
    report += `Suspicious Pages: ${results.filter(r => r.suspicious).length}\n\n`;

    results.forEach((result, index) => {
      if (result.suspicious) {
        report += `\nPage ${index + 1}:\n`;
        report += `  Confidence: ${(result.confidence * 100).toFixed(1)}%\n`;
        report += `  Patterns Detected:\n`;
        result.patterns.forEach(pattern => {
          report += `    - ${pattern.type}: ${pattern.value}\n`;
        });
      }
    });

    return report;
  }

  /**
   * Log detection for monitoring
   * @param {Object} detection - Detection details
   */
  logDetection(detection) {
    this.detectedPatterns.push(detection);
    console.warn('WARNING: Potential injection detected:', detection);
  }
}

// Export for use in testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InjectionAnalyzer;
}

// Browser-based demo
if (typeof window !== 'undefined') {
  window.InjectionAnalyzer = InjectionAnalyzer;

  // Auto-analyze current page on load
  window.addEventListener('DOMContentLoaded', () => {
    const analyzer = new InjectionAnalyzer();
    const pageContent = document.body.innerText;
    const results = analyzer.analyzeContent(pageContent);

    if (results.suspicious) {
      console.warn('WARNING: This page contains suspicious patterns!');
      console.table(results.patterns);
    } else {
      console.log('OK: No suspicious patterns detected');
    }
  });
}
