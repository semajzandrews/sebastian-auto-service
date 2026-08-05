import { formatPhone, telHref, smsHref } from "./phone";

/** Digits only. THE one place this shop's number is written down. */
const PHONE_DIGITS = "9737311111";

/**
 * The shop reads the car before it touches it. A photo or a short clip of the
 * noise lets that reading start before the car is even on the lift.
 */
export const SMS_BODY =
  "Hi Sebastian Auto, sending a photo of what my car is doing before I bring it in. Can you take a look?";

export const SMS_HINT = "Send a photo or a clip of the noise";

export const site = {
  digits: PHONE_DIGITS,
  phone: formatPhone(PHONE_DIGITS),
  phoneHref: telHref(PHONE_DIGITS),
  smsHref: smsHref(PHONE_DIGITS, SMS_BODY),
  smsBody: SMS_BODY,
};
