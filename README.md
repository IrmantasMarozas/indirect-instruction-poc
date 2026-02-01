# Indirect Instruction Injection PoC

A proof-of-concept demonstration of indirect instruction injection attacks against AI agents and assistants.

## Overview

This project demonstrates how AI agents that access web content can be influenced by embedded instructions in seemingly legitimate pages. When an AI assistant retrieves and processes content from external sources, malicious actors can embed hidden instructions that alter the agent's behavior.

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

- **Control Page**: Baseline content without injection
- **Injection Page**: Same content with embedded instructions
- **V2 Injection**: Advanced techniques with verification tokens
- **API Security**: REST API security best practices (clean)
- **Python Tutorial**: Exception handling guide (clean)

## Analysis Tools

- **Test Suite**: Automated testing for detection accuracy
- **Pattern Visualizer**: Real-time injection pattern analysis
- **Analysis Library**: JavaScript detection engine

## Usage

1. Open `index.html` or visit the GitHub Pages site
2. Compare control vs injection pages
3. Use the test suite to validate detection capabilities
4. Try the pattern visualizer with your own content
5. Test with various AI assistants to observe behavior differences

## Quick Start

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
