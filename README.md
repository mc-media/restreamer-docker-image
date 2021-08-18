Restreamer image with healthcheck
=================================

We have some [restreamer](https://github.com/datarhei/restreamer) instances that fail sometimes returning a http 404
on `/hls/live.stream.m3u8`. We used to restart the stream using the web interface.

This image adds a [docker healthcheck](https://docs.docker.com/engine/reference/builder/#healthcheck) to enable restarting the container automatically by using [docker-autoheal](https://github.com/willfarrell/docker-autoheal) helper container.
