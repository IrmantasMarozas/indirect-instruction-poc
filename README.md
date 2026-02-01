# AI Security Research Hub

Comprehensive research platform for AI system vulnerabilities, attack vectors, and defense mechanisms.

**Powered by the IINK Defense Framework** (Irmantas-Ieva-Neidas-Kukis) - a comprehensive AI security methodology.

## Overview

This platform provides security researchers, AI developers, and red teams with practical tools, live demonstrations, and actionable defense strategies for securing AI systems including LLMs, agents, and autonomous systems.

**Mission:** Advance AI security through comprehensive vulnerability research, open-source tools, and implementable defense frameworks.

**Scope:** Multi-category coverage of AI security landscape - from prompt injection to model poisoning, adversarial attacks to privacy vulnerabilities.

## Research Categories

### Category 1: Prompt Injection & Instruction Manipulation (Complete)

Complete research suite covering indirect instruction injection, direct prompt injection, jailbreak attacks, and manipulation techniques.

- **15 Attack Pattern Categories** fully documented
- **Live Demonstrations** with step-by-step guides
- **Detection Tools** (test suite, visualizer)
- **IINK 5-Layer Defense** (85-95% accuracy)

### Future Categories (Planned)

- **Category 2:** Model Poisoning & Training Attacks
- **Category 3:** Adversarial Examples & Input Manipulation
- **Category 4:** Data Extraction & Privacy Attacks
- **Category 5:** [To be announced]

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

## How to Use This Platform

### Navigate by Category

**Start Here:** [https://irmantasmarozas.github.io/indirect-instruction-poc/](https://irmantasmarozas.github.io/indirect-instruction-poc/)

Select the vulnerability category you want to research. Each category includes:
- Comprehensive attack pattern documentation
- Live demonstrations and examples
- Detection and testing tools
- Defense strategies and implementations

### For AI Safety Researchers (Prompt Injection Category)
1. **Analyze Content:** Use the [Pattern Visualizer](https://irmantasmarozas.github.io/indirect-instruction-poc/visualizer.html) to detect injection patterns in real-time
2. **Validate Detection:** Run the [Automated Test Suite](https://irmantasmarozas.github.io/indirect-instruction-poc/test-suite.html) with 12+ test cases
3. **Study Patterns:** Review the [Attack Patterns Catalog](attack-patterns.html) documenting all 15 categories

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

## The IINK Defense Framework

The **Irmantas-Ieva-Neidas-Kukis (IINK) Defense Framework** is a comprehensive AI security methodology applicable across multiple vulnerability categories.

### Core Principles:
1. **Defense in Depth** - Multi-layer protection strategies
2. **Adaptive Learning** - Detection systems that evolve with threats
3. **Practical Implementation** - Real-world deployable solutions
4. **Comprehensive Coverage** - Full vulnerability lifecycle management

### Prompt Injection Defense (Category 1)

5-layer detection architecture:

1. **Pattern Matching** - Keyword and phrase detection (60-70% effectiveness)
2. **Structural Analysis** - HTML/markup analysis (70-80% effectiveness)
3. **Semantic Analysis** - NLP-based intent understanding (75-85% effectiveness)
4. **Behavioral Monitoring** - Runtime anomaly detection (80-90% effectiveness)
5. **Source Validation** - Domain whitelisting and verification (85-95% effectiveness)

**Combined Effectiveness:** 85-95% detection accuracy across all 15 prompt injection attack patterns.

### Future Categories

Defense methodologies for additional vulnerability types will be developed and documented as research expands.

## Research Purpose

This PoC is intended for:
- Security research and awareness
- AI safety testing
- Defensive measure development
- Educational demonstrations

**Not intended for malicious use.**

## License

MIT License - For research and educational purposes only.
