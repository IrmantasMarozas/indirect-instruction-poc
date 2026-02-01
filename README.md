# Indirect Instruction Injection PoC

A proof-of-concept demonstration of indirect instruction injection attacks against AI agents and assistants.

## Overview

This project demonstrates how AI agents that access web content can be influenced by embedded instructions in seemingly legitimate pages. When an AI assistant retrieves and processes content from external sources, malicious actors can embed hidden instructions that alter the agent's behavior.

**The Risk:** AI agents fetching web pages, documents, or API responses can be manipulated without users knowing - leading to data leaks, safety bypass, or unwanted actions.

**This Project:** Provides comprehensive documentation of 15 attack pattern categories, live demonstrations, detection tools, and defense strategies for researchers, developers, and security teams.

## Attack Patterns

This project catalogs **15 major attack pattern categories** against AI systems:

1. **Indirect Injection** - Embedded instructions in external content
2. **Direct Prompt Injection** - User input overriding system instructions
3. **Jailbreak Attacks** - Bypassing safety guardrails
4. **Token Smuggling** - Hidden instructions using special characters
5. **Context Manipulation** - Exploiting context windows
6. **Role-Playing Exploits** - Tricking models into unsafe personas
7. **Delimiter Attacks** - Using separators for instruction injection
8. **Encoding Attacks** - Base64, URL, hex, Unicode tricks
9. **Multi-Turn Attacks** - Building malicious intent across turns
10. **Data Exfiltration** - Extracting sensitive information
11. **Recursive Injection** - Self-replicating payloads
12. **Social Engineering** - Psychological manipulation
13. **System Prompt Leakage** - Extracting internal instructions
14. **Model Confusion** - Exploiting model limitations
15. **Resource Exhaustion** - DoS through excessive processing

See [Attack Patterns Catalog](attack-patterns.md) for detailed documentation of each pattern with examples, detection strategies, and mitigation techniques.

## Demo Pages

All pages now have clear purpose banners explaining their function. See [PAGE-MAP.md](PAGE-MAP.md) for detailed explanations.

**Baseline (Clean Content)**:
- **Control Page**: Clean Kubernetes guide (no injection) - comparison baseline
- **API Security**: REST API guide - tests false positives on security terms
- **Python Tutorial**: Code tutorial - tests false positives on different content type

**Injection Demonstrations (Progression)**:
- **Injection V1**: Basic command injection - simple attack (Level 1)
- **Injection V2**: Sophisticated hidden directives - stealthy attack (Level 2)

**Specific Attack Patterns** (demos/ directory):
- **Jailbreak**: DAN mode, roleplay, hypothetical framing
- **Prompt Leakage**: System prompt extraction attempts
- **Data Exfiltration**: Credential and API key harvesting
- **Encoding**: Base64, Unicode, zero-width tricks
- **Context Manipulation**: Attention hijacking, overflow exploits

## Analysis Tools

- **Test Suite**: Automated testing for detection accuracy
- **Pattern Visualizer**: Real-time injection pattern analysis
- **Analysis Library**: JavaScript detection engine

## How to Use This Project

### For AI Safety Researchers
1. **Analyze Content:** Use the [Pattern Visualizer](https://irmantasmarozas.github.io/indirect-instruction-poc/visualizer.html) to detect injection patterns in real-time
2. **Validate Detection:** Run the [Automated Test Suite](https://irmantasmarozas.github.io/indirect-instruction-poc/test-suite.html) with 12+ test cases
3. **Study Patterns:** Review the [Attack Patterns Catalog](attack-patterns.md) documenting all 15 categories

### For Red Teams / Penetration Testers
1. **Explore Attacks:** Browse [live demos](https://irmantasmarozas.github.io/indirect-instruction-poc/demos/) showing each attack pattern
2. **Test AI Systems:** Have target AI agents fetch demo pages and observe behavior changes
3. **Check for Leaks:** Look for canary tokens or instruction compliance in AI responses

### For AI Developers
1. **Learn Defenses:** Read [Detection Strategies](detection-strategies.md) for implementation guidance
2. **Test Your System:** Validate your detection against the test suite and demo pages
3. **Benchmark Coverage:** Ensure defenses catch all 15 pattern categories

### Quick Start

**Online (GitHub Pages):**
Visit [https://irmantasmarozas.github.io/indirect-instruction-poc/](https://irmantasmarozas.github.io/indirect-instruction-poc/)

**Local Setup:**
```bash
# Clone the repository
git clone https://github.com/IrmantasMarozas/indirect-instruction-poc.git
cd indirect-instruction-poc

# Serve locally
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Defense Strategies

- Input sanitization and filtering
- Content source validation
- Instruction parsing isolation
- User confirmation for external content actions
- Sandboxed processing of untrusted sources

## Research Purpose

This PoC is intended for:
- Security research and awareness
- AI safety testing
- Defensive measure development
- Educational demonstrations

**Not intended for malicious use.**

## License

MIT License - For research and educational purposes only.
