/**
 * - Codes of the supported encodings
 */
export type BaseCodes =
    | '\x00'
    | '0'
    | '7'
    | '9'
    | 'f'
    | 'F'
    | 'v'
    | 'V'
    | 't'
    | 'T'
    | 'b'
    | 'B'
    | 'c'
    | 'C'
    | 'h'
    | 'k'
    | 'K'
    | 'z'
    | 'Z'
    | 'm'
    | 'M'
    | 'u'
    | 'U';

/**
 * - Names of the supported encodings
 */
export type BaseNames =
    | 'identity'
    | 'base2'
    | 'base8'
    | 'base10'
    | 'base16'
    | 'base16upper'
    | 'base32hex'
    | 'base32hexupper'
    | 'base32hexpad'
    | 'base32hexpadupper'
    | 'base32'
    | 'base32upper'
    | 'base32pad'
    | 'base32padupper'
    | 'base32z'
    | 'base36'
    | 'base36upper'
    | 'base58btc'
    | 'base58flickr'
    | 'base64'
    | 'base64pad'
    | 'base64url'
    | 'base64urlpad';

export type BaseNamesCodes = BaseCodes | BaseNames;
export type Codec = {
    encode: (buffer: Uint8Array) => string;
    decode: (hash: string) => Uint8Array;
};
export type CodecFactory = (input: string) => Codec;
