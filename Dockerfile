FROM datarhei/restreamer:latest

COPY healthcheck.js /

HEALTHCHECK --interval=30s --timeout=30s --start-period=120s --retries=3 CMD ["node", "/healthcheck.js"]