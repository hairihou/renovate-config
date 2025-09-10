# renovate-config

## Usage

You can use these configurations in your own `renovate.json` file by extending them.

### Main Configuration

The main configuration is available in `renovate.json`. To use it, add the following to your configuration file:

```json
{
  "extends": ["github>hairihou/renovate-config"]
}
```

### Individual Preset

You can also extend individual configurations as needed. For example, to only use the Node.js project settings:

```json
{
  "extends": ["github>hairihou/renovate-config:node-project"]
}
```
