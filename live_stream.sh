# Generate live url
node auth.js

# Get the url
camera_url_m3u8=$( cat ./m3u8/index_local.m3u8 )
# camera_url_m3u8=$( node auth.js )

# Open vlc and then input the livestream
/snap/bin/vlc $camera_url_m3u8
