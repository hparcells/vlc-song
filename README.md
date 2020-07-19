# VLC Song
> Gets the currently playing song in VLC.

## Installation

```
npm i vlc-song -g
```

## Usage

```
vlc-song -p password
```

or

```
vlc-song -password password
```

The password is the password that you set in VLC's, Preferences > Main interfaces > Lua.

Optionally, you can pass a `port` argument, which is the port of the web interface. The default is 8080.

## Output

If the metadata contains a title:

`TITLE`

---

If the metadata contains a title and an artist:

`ARTIST - TITLE`

---

If the metadata doesn't contain a title.

`FILENAME`
