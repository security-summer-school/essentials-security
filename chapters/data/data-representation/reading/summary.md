# Summary

Data can be represented in many ways, with different purposes.

Some useful information from today:

- base64 is encoding, not encrypting
- Computers love `binary`, humans love `decimal`, and they both have a thing for `hexadecimal`
- We need the `base64` and `hashlib` modules imported in our Python scripts in order for us to work with `base64` encoding/decoding and `Hashing`

Some useful Python commands from today:

- Convert Binary to Decimal - `int(n,2)`
- Find the ASCII code - `ord('X')`
- Find a character based on its ASCII code - `chr(88)`
- Encode in base64 format - `(base64.b64encode(text1.encode('ascii'))).decode('ascii')`
- Decode from base64 format - `(base64.b64decode(base64_message.encode('ascii'))).decode('ascii')`
