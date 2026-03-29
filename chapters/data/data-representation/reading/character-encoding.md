# Character Encoding

## ASCII

ASCII (American Standard Code for Information Interchange):
Going from 0 - 127

```text
DEC HEX ASCII      DEC HEX ASCII      DEC HEX ASCII       DEC HEX ASCII       DEC HEX ASCII
0   00  NUL        26 1A  SUB         52  34  4           78  4E  N           104 68  h
1   01  SOH        27 1B  ESC         53  35  5           79  4F  O           105 69  i
2   02 STX         28 1C  FS          54  36  6           80  50  P           106 6A  j
3   03 ETX         29 1D  GS          55  37  7           81  51  Q           107 6B  k
4   04 EOT         30 1E  RS          56  38  8           82  52  R           108 6C  l
5   05 ENQ         31 1F  US          57  39  9           83  53  S           109 6D  m
6   06 ACK         32 20  SPACE       58  3A  :           84  54  T           110 6E  n
7   07 BEL         33 21  !           59  3B  ;           85  55  U           111 6F  o
8   08 BS          34 22  "           60  3C  <           86  56  V           112 70  p
9   09 HT          35 23  #           61  3D  =           87  57  W           113 71  q
10  0A LF          36 24  $           62  3E  >           88  58  X           114 72  r
11  0B VT          37 25  %           63  3F  ?           89  59  Y           115 73  s
12  0C FF          38 26  &           64  40  @           90  5A  Z           116 74  t
13  0D CR          39 27  '           65  41  A           91  5B  [           117 75  u
14  0E SO          40 28  (           66  42  B           92  5C  \           118 76  v
15  0F SI          41 29  )           67  43  C           93  5D  ]           119 77  w
16  10 DLE         42 2A  *           68  44  D           94  5E  ^           120 78  x
17  11 DC1         43 2B  +           69  45  E           95  5F  _           121 79  y
18  12 DC2         44 2C  ,           70  46  F           96  60  `           122 7A  z
19  13 DC3         45 2D  -           71  47  G           97  61  a           123 7B  {
20  14 DC4         46 2E  .           72  48  H           98  62  b           124 7C  |
21  15 NAK         47 2F  /           73  49  I           99  63  c           125 7D  }
22  16 SYN         48 30  0           74  4A  J           100 64  d           126 7E  ~
23  17 ETB         49 31  1           75  4B  K           101 65  e           127 7F
24  18 CAN         50 32  2           76  4C  L           102 66  f
25  19 EM          51 33  3           77  4D  M           103 67  g
```

We can see that by adding 32 to an uppercase letter, we get that same letter in lowercase:
e.g. `E + 32 = e`

Below, you can see the built-in Python functions `ord` and `chr` that help us determine what character coresponds to a certain ASCII code and what ASCII code a character has.

```py
>>> ord('E')
69
>>> chr(69)
'E'
>>> chr(ord('E') + 32)
'e'
>>> chr(ord('e') - 32)
'E'
>>>
```

In terms of storage efficiency, we can encode
`UTF-8` for ASCII text (English and other Western languages)
`UTF-16` for non-ASCII text (Chinese and other Asian languages)

Let's say we have a string in Chinese. With Python, we can get the hex bytes of the string, using the built-in function `str.encode()`:

```py
Str = ("老板")
print(Str)

Str = (("老板").encode("utf-8"))
print(Str)
```

The output will be:

```text
老板
b'\xe8\x80\x81\xe6\x9d\xbf'
```

If we want to get back to the original string, we will execute:

```py
print((Str.decode()))
```

And we will get:

```text
老板
```

## Base64

Base64 is a way of representing binary data in sequences of 24 bits (3 bytes) that can be represented by 4 Base64 digits.

Base64 Encoding Table:

```text
Index   Char      Index   Char      Index   Char      Index   Char
0       A         16      Q         32      g         48      w
1       B         17      R         33      h         49      x
2       C         18      S         34      i         50      y
3       D         19      T         35      j         51      z
4       E         20      U         36      k         52      0
5       F         21      V         37      l         53      1
6       G         22      W         38      m         54      2
7       H         23      X         39      n         55      3
8       I         24      Y         40      o         56      4
9       J         25      Z         41      p         57      5
10      K         26      a         42      q         58      6
11      L         27      b         43      r         59      7
12      M         28      c         44      s         60      8
13      N         29      d         45      t         61      9
14      O         30      e         46      u         62      +
15      P         31      f         47      v         63      /
```

If we want to convert to and from Base64 in Python we can use the `base64` module:

```py
import base64

message = "Some random message"
message_bytes = message.encode('ascii') # We transform the string to "b'Some random message'", making it a sequence of bytes
base64_bytes = base64.b64encode(message_bytes)
base64_message = base64_bytes.decode('ascii') # We do the opposite of the previous process, now eliminating "b''", to make it a string

print(base64_message)
```

Thus getting us to the base64 string:

```text
U29tZSByYW5kb20gbWVzc2FnZQ==
```

If we would want to decode it, we would have to simply revert the commands as follows:

```py
import base64

base64_message = 'U29tZSByYW5kb20gbWVzc2FnZQ=='
base64_bytes = base64_message.encode('ascii')
message_bytes = base64.b64decode(base64_bytes)
message = message_bytes.decode('ascii')

print(message)
```

Which will get us back to:

```text
Some random message
```

As you can see, some Base64 strings have "=" at the end, some have "==" and others have nothing uncommon.
Since Base64 represents binary data in 3 bytes, we should also know how to treat the case when the length is not divisible by 3.
As a consequence, there is output padding for Base64 as follows:

```text
length % 3 = 1 => "=="
length % 3 = 2 => "="
length % 3 = 0 => no padding
```

The following can be used to better understand output padding:

```py
import base64

text1 = "SecuritySummmerSch"
text2 = "SecuritySummmerScho"
text3 = "SecuritySummmerSchoo"
text4 = "SecuritySummmerSchool"

b64_text1 = (base64.b64encode(text1.encode('ascii'))).decode('ascii')
b64_text2 = (base64.b64encode(text2.encode('ascii'))).decode('ascii')
b64_text3 = (base64.b64encode(text3.encode('ascii'))).decode('ascii')
b64_text4 = (base64.b64encode(text4.encode('ascii'))).decode('ascii')

print(f"Plain text\t\tPT length\tBase64 text\t\t\tB64 length")
print(f"{text1}\t{len(text1)}\t\t{b64_text1}\t{len(b64_text1)}")
print(f"{text2}\t{len(text2)}\t\t{b64_text2}\t{len(b64_text2)}")
print(f"{text3}\t{len(text3)}\t\t{b64_text3}\t{len(b64_text3)}")
print(f"{text4}\t{len(text4)}\t\t{b64_text4}\t{len(b64_text4)}")
```

We get:

```html
Plain text              PT length       Base64 text                     B64 length
SecuritySummmerSch      18              U2VjdXJpdHlTdW1tbWVyU2No        24
SecuritySummmerScho     19              U2VjdXJpdHlTdW1tbWVyU2Nobw==    28
SecuritySummmerSchoo    20              U2VjdXJpdHlTdW1tbWVyU2Nob28=    28
SecuritySummmerSchool   21              U2VjdXJpdHlTdW1tbWVyU2Nob29s    28
```

Try decoding yourself!

```text
SGVsbG8gZnJvbSB0aGUgRWFydGgtNjQgIQ==
```
