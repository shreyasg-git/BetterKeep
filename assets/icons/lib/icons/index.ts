import * as React from 'react';
import * as Svg from 'react-native-svg';
export type IconType =
  | 'bank'
  | 'bell'
  | 'calendar'
  | 'call'
  | 'camera'
  | 'category'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'clinic'
  | 'cloud-download'
  | 'comment'
  | 'community'
  | 'contact'
  | 'csv'
  | 'delete'
  | 'desktop'
  | 'down'
  | 'edit'
  | 'file'
  | 'funnel'
  | 'gallery'
  | 'green-tick'
  | 'heart-filled'
  | 'heart'
  | 'hospital'
  | 'ic-signout'
  | 'ic-team'
  | 'keyboard'
  | 'medicine'
  | 'message'
  | 'mic-outline-off'
  | 'mic-outline'
  | 'mic'
  | 'minus'
  | 'more'
  | 'pause'
  | 'pdf'
  | 'phonebook'
  | 'play'
  | 'plus-ring'
  | 'plus'
  | 'printer'
  | 'purchases'
  | 'question-mark'
  | 'refresh'
  | 'return'
  | 'sale-return'
  | 'sales'
  | 'savings'
  | 'search'
  | 'store'
  | 'timer'
  | 'triangle-menu'
  | 'up'
  | 'upi'
  | 'users'
  | 'videocam-off'
  | 'videocam'
  | 'volume-mute-outline'
  | 'volume-outline'
  | 'wallet'
  | 'warning-1'
  | 'warning-2'
  | 'whatsapp'
  | 'x-circle'
  | 'x';
export const findIconByName = (
  name: string,
): React.ComponentType<Svg.SvgProps> => {
  switch (name) {
    case 'bank':
      return require('./Bank').default;

    case 'bell':
      return require('./Bell').default;

    case 'calendar':
      return require('./Calendar').default;

    case 'call':
      return require('./Call').default;

    case 'camera':
      return require('./Camera').default;

    case 'category':
      return require('./Category').default;

    case 'check':
      return require('./Check').default;

    case 'chevron-down':
      return require('./ChevronDown').default;

    case 'chevron-left':
      return require('./ChevronLeft').default;

    case 'chevron-right':
      return require('./ChevronRight').default;

    case 'chevron-up':
      return require('./ChevronUp').default;

    case 'clinic':
      return require('./Clinic').default;

    case 'cloud-download':
      return require('./CloudDownload').default;

    case 'comment':
      return require('./Comment').default;

    case 'community':
      return require('./Community').default;

    case 'contact':
      return require('./Contact').default;

    case 'csv':
      return require('./Csv').default;

    case 'delete':
      return require('./Delete').default;

    case 'desktop':
      return require('./Desktop').default;

    case 'down':
      return require('./Down').default;

    case 'edit':
      return require('./Edit').default;

    case 'file':
      return require('./File').default;

    case 'funnel':
      return require('./Funnel').default;

    case 'gallery':
      return require('./Gallery').default;

    case 'green-tick':
      return require('./GreenTick').default;

    case 'heart-filled':
      return require('./HeartFilled').default;

    case 'heart':
      return require('./Heart').default;

    case 'hospital':
      return require('./Hospital').default;

    case 'ic-signout':
      return require('./IcSignout').default;

    case 'ic-team':
      return require('./IcTeam').default;

    case 'keyboard':
      return require('./Keyboard').default;

    case 'medicine':
      return require('./Medicine').default;

    case 'message':
      return require('./Message').default;

    case 'mic-outline-off':
      return require('./MicOutlineOff').default;

    case 'mic-outline':
      return require('./MicOutline').default;

    case 'mic':
      return require('./Mic').default;

    case 'minus':
      return require('./Minus').default;

    case 'more':
      return require('./More').default;

    case 'pause':
      return require('./Pause').default;

    case 'pdf':
      return require('./Pdf').default;

    case 'phonebook':
      return require('./Phonebook').default;

    case 'play':
      return require('./Play').default;

    case 'plus-ring':
      return require('./PlusRing').default;

    case 'plus':
      return require('./Plus').default;

    case 'printer':
      return require('./Printer').default;

    case 'purchases':
      return require('./Purchases').default;

    case 'question-mark':
      return require('./QuestionMark').default;

    case 'refresh':
      return require('./Refresh').default;

    case 'return':
      return require('./Return').default;

    case 'sale-return':
      return require('./SaleReturn').default;

    case 'sales':
      return require('./Sales').default;

    case 'savings':
      return require('./Savings').default;

    case 'search':
      return require('./Search').default;

    case 'store':
      return require('./Store').default;

    case 'timer':
      return require('./Timer').default;

    case 'triangle-menu':
      return require('./TriangleMenu').default;

    case 'up':
      return require('./Up').default;

    case 'upi':
      return require('./Upi').default;

    case 'users':
      return require('./Users').default;

    case 'videocam-off':
      return require('./VideocamOff').default;

    case 'videocam':
      return require('./Videocam').default;

    case 'volume-mute-outline':
      return require('./VolumeMuteOutline').default;

    case 'volume-outline':
      return require('./VolumeOutline').default;

    case 'wallet':
      return require('./Wallet').default;

    case 'warning-1':
      return require('./Warning_1').default;

    case 'warning-2':
      return require('./Warning_2').default;

    case 'whatsapp':
      return require('./Whatsapp').default;

    case 'x-circle':
      return require('./XCircle').default;

    case 'x':
      return require('./X').default;

    default:
      return require('./QuestionMark').default;
  }
};
