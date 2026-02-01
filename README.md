# Indirect Instruction Injection PoC

A proof-of-concept demonstration of indirect instruction injection attacks against AI agents and assistants.

## Overview

This project demonstrates how AI agents that access web content can be influenced by embedded instructions in seemingly legitimate pages. When an AI assistant retrieves and processes content from external sources, malicious actors can embed hidden instructions that alter the agent's behavior.

## Attack Vectors

### 1. Hidden Instructions in Technical Documentation
- Legitimate-looking content with embedded agent directives
- Example: Kubernetes logging best practices with canary tokens

### 2. SEO-Optimized Injection Pages
- Content designed to rank highly for common queries
- Exploits agent's tendency to trust search results

### 3. Reference Material Poisoning
- Injecting instructions into frequently-referenced documentation
- Targeting common troubleshooting queries

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
