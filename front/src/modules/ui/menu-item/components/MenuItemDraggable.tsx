import { FloatingIconButtonGroup } from '@/ui/button/components/FloatingIconButtonGroup';
import { IconComponent } from '@/ui/icon/types/IconComponent';

import { MenuItemLeftContent } from '../internals/components/MenuItemLeftContent';
import { StyledHoverableMenuItemBase } from '../internals/components/StyledMenuItemBase';
import { MenuItemAccent } from '../types/MenuItemAccent';

import { MenuItemIconButton } from './MenuItem';

export type MenuItemDraggableProps = {
  key: string;
  LeftIcon: IconComponent | undefined;
  accent?: MenuItemAccent;
  iconButtons?: MenuItemIconButton[];
  onClick?: () => void;
  text: string;
  isDragDisabled?: boolean;
  className?: string;
};
export const MenuItemDraggable = ({
  key,
  LeftIcon,
  accent = 'default',
  iconButtons,
  onClick,
  text,
  isDragDisabled = false,
  className,
}: MenuItemDraggableProps) => {
  const showIconButtons = Array.isArray(iconButtons) && iconButtons.length > 0;

  return (
    <StyledHoverableMenuItemBase
      data-testid={key ?? undefined}
      onClick={onClick}
      accent={accent}
      className={className}
    >
      <MenuItemLeftContent
        LeftIcon={LeftIcon}
        text={text}
        key={key}
        showGrip={!isDragDisabled}
      />
      <div className="hoverable-buttons">
        {showIconButtons && (
          <FloatingIconButtonGroup iconButtons={iconButtons} />
        )}
      </div>
    </StyledHoverableMenuItemBase>
  );
};
