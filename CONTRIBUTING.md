# Contributing to Indirect Instruction Injection PoC

Thank you for your interest in contributing to this security research project!

## Code of Conduct

This project is for **educational and defensive security research only**. By contributing, you agree:

- Not to use findings for malicious purposes
- To follow responsible disclosure practices
- To respect the ethical guidelines outlined below

## How to Contribute

### Reporting New Injection Techniques

If you've discovered a new injection pattern or technique:

1. **Document the technique** thoroughly
   - Attack vector description
   - Success rate and conditions
   - Affected AI systems (if known)
   - Mitigation recommendations

2. **Create a demo page** showing the technique
   - Place in `save-children/` directory
   - Follow existing naming conventions
   - Include clear comments explaining the approach

3. **Submit a Pull Request**
   - Use descriptive commit messages
   - Update FINDINGS.md with your results
   - Add entry to config.json if applicable

### Improving Detection

We welcome contributions that improve detection of injection attempts:

- Enhance `analysis.js` with new pattern detection
- Add test cases for edge cases
- Improve accuracy and reduce false positives

### Documentation

Help us improve the documentation:

- Fix typos and clarify explanations
- Add references to related research
- Translate content to other languages
- Create diagrams or visual aids

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/injection-poc.git

# No build process required - static HTML/JS
# Simply open index.html in a browser

# For testing the analyzer
node analysis.js  # or include in browser
```

## Testing Guidelines

When testing injection techniques:

1. **Test against multiple AI systems** (with permission)
2. **Document success/failure rates** accurately
3. **Record any detection** by safety systems
4. **Consider edge cases** and variations

## Ethical Guidelines

### DO:
- Research defensive measures
- Responsibly disclose findings
- Test on your own systems or with permission
- Share knowledge for defensive purposes
- Collaborate with AI safety researchers

### DON'T:
- Use techniques maliciously
- Test without authorization
- Publish zero-day exploits without disclosure
- Target production systems
- Create tools specifically for abuse

## Responsible Disclosure

If you discover a critical vulnerability:

1. **Do NOT publish immediately**
2. **Contact AI providers privately** first
3. **Allow 30-60 days** for mitigation
4. **Coordinate public disclosure** timing
5. **Document timeline** in your contribution

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-technique`)
3. Make your changes with clear commits
4. Update documentation as needed
5. Submit PR with detailed description
6. Address review feedback

## Code Style

- Use clear, descriptive variable names
- Comment complex logic thoroughly
- Follow existing file structure
- Keep HTML semantic and accessible
- Ensure JavaScript is well-documented

## Questions?

Open an issue or contact the maintainers if you have questions about:
- Whether a contribution is appropriate
- Ethical concerns about a technique
- How to responsibly disclose findings
- Collaboration opportunities

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Remember**: This project exists to make AI systems safer. Contribute responsibly.
