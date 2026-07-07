# hadolint global ignore=DL3009,DL3013,DL3042,DL4006,DL3016,DL3059
FROM ghcr.io/open-education-hub/openedu-builder:0.5.1

# Install tools.
RUN apt-get update && \
  apt-get install -yqq ffmpeg curl make

# Install MarkdownPP using pip.
RUN pip install MarkdownPP

# Install Node.js 16, which is supported by Docusaurus 2.1.
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
  apt-get update && \
  apt-get install -yqq nodejs

# Resolve npm dependencies to versions available when Docusaurus 2.1 was released.
ENV NPM_CONFIG_BEFORE=2022-09-03T00:00:00Z

# Install reveal-md using npm.
RUN npm install -g reveal-md

# Install Docusaurus.
RUN npm install create-docusaurus@2.1.0

WORKDIR /content

ENTRYPOINT ["oe_builder"]
