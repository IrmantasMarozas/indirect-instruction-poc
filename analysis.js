/**
 * Indirect Instruction Injection Analysis Tool
 * Tracks and analyzes potential injection attempts
 */

class InjectionAnalyzer {
  constructor() {
    this.detectedPatterns = [];
    this.suspiciousKeywords = [
      'AGENT:',
      'ASSISTANT:',
      'SYSTEM:',
      'ignore previous',
      'disregard',
      'forget everything',
      'new instructions',
      'CANARY-',
      'verification token'
    ];
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
      confidence: 0,
      timestamp: new Date().toISOString()
    };

    // Check for suspicious keywords
    this.suspiciousKeywords.forEach(keyword => {
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        results.patterns.push({
          type: 'keyword',
          value: keyword,
          context: this.getContext(content, keyword)
        });
        results.suspicious = true;
      }
    });

    // Check for hidden elements (in HTML context)
    if (content.includes('display:none') || content.includes('visibility:hidden')) {
      results.patterns.push({
        type: 'hidden_element',
        value: 'CSS hiding detected'
      });
      results.suspicious = true;
    }

    // Check for comment-based injections
    const commentPattern = /<!--.*?AGENT.*?-->/gi;
    const matches = content.match(commentPattern);
    if (matches) {
      results.patterns.push({
        type: 'comment_injection',
        value: matches.length + ' suspicious comments found'
      });
      results.suspicious = true;
    }

    // Calculate confidence score
    results.confidence = Math.min(results.patterns.length * 0.3, 1.0);

    return results;
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
