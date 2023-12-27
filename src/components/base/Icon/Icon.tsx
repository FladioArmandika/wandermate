import {
  IconBookmark,
  IconCalendar,
  IconChevronLeft,
  IconClose,
  IconDumbell,
  IconEnergy,
  IconExplore,
  IconFloor,
  IconHome,
  IconLock,
  IconMail,
  IconMore,
  IconNotification,
  IconOpen,
  IconPhone,
  IconPlan,
  IconProgress,
  IconQR,
  IconResize,
  IconSearch,
  IconTimer,
  IconUser,
  Icons,
} from '@app/assets/icons';
import { colors } from '@app/themes';

type Props = {
  icon: Icons;
  width?: number;
  height?: number;
  color?: string;
};

const Icon = ({
  icon,
  height = 24,
  width = 24,
  color = colors.black,
}: Props) => {
  switch (icon) {
    case 'bookmark':
      return <IconBookmark width={width} height={height} fill={color} />;
    case 'dumbell':
      return <IconDumbell width={width} height={height} fill={color} />;
    case 'calendar':
      return <IconCalendar width={width} height={height} fill={color} />;
    case 'chevron-left':
      return <IconChevronLeft width={width} height={height} fill={color} />;
    case 'home':
      return <IconHome width={width} height={height} fill={color} />;
    case 'floor':
      return <IconFloor width={width} height={height} fill={color} />;
    case 'lock':
      return <IconLock width={width} height={height} fill={color} />;
    case 'notification':
      return <IconNotification width={width} height={height} fill={color} />;
    case 'mail':
      return <IconMail width={width} height={height} fill={color} />;
    case 'phone':
      return <IconPhone width={width} height={height} fill={color} />;
    case 'resize':
      return <IconResize width={width} height={height} fill={color} />;
    case 'search':
      return <IconSearch width={width} height={height} fill={color} />;
    case 'user':
      return <IconUser width={width} height={height} fill={color} />;
    case 'energy':
      return <IconEnergy width={width} height={height} fill={color} />;
    case 'timer':
      return <IconTimer width={width} height={height} fill={color} />;
    case 'progress':
      return <IconProgress width={width} height={height} fill={color} />;
    case 'open':
      return <IconOpen width={width} height={height} fill={color} />;
    case 'explore':
      return <IconExplore width={width} height={height} fill={color} />;
    case 'qr':
      return <IconQR width={width} height={height} fill={color} />;
    case 'close':
      return <IconClose width={width} height={height} fill={color} />;
    case 'more':
      return <IconMore width={width} height={height} fill={color} />;
    case 'plan':
      return <IconPlan width={width} height={height} fill={color} />;
    default:
      break;
  }
};

export default Icon;
