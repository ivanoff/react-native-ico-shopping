declare module 'react-native-ico-shopping' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'shopping-bag' |
      'shopping-bag-1' |
      'shopping-basket' |
      'invoice' |
      'shopping-cart' |
      'shopping-cart-1' |
      'shopping-cart-2' |
      'package' |
      'delivery-truck' |
      'panel' |
      'shopping-bag-2' |
      'shopping-bag-3' |
      'shopping-basket-1' |
      'invoice-1' |
      'shopping-cart-3' |
      'shopping-cart-4' |
      'shopping-cart-5' |
      'credit-card' |
      'shopping-bag-4' |
      'shopping-bag-5' |
      'barcode' |
      'shopping-basket-2' |
      'invoice-2' |
      'sign' |
      'calculator' |
      'calculator-1' |
      'headset' |
      'shopping-cart-6' |
      'shopping-cart-7' |
      'shopping-cart-8' |
      'shopping-cart-9' |
      'shopping-cart-10' |
      'shopping-cart-11' |
      'shopping-cart-12' |
      'shopping-cart-13' |
      'money' |
      'cash' |
      'pound-sterling' |
      'cash-register' |
      'rupee' |
      'yen' |
      'package-1' |
      'shopping-bag-6' |
      'shopping-bag-7' |
      'shopping-basket-3' |
      'shopping-cart-14' |
      'shopping-cart-15' |
      'shopping-cart-16' |
      'shipping-truck' |
      'laptop' |
      'online-shop' |
      'online-shop-1' |
      'online-shop-2' |
      'online-shop-3' |
      'online-shop-4' |
      'credit-card-1' |
      'coffee-cup' |
      'customer' |
      'chat' |
      'laptop-1' |
      'package-2' |
      'package-3' |
      'package-4' |
      'trolley' |
      'delivery-truck-1' |
      'trolley-1' |
      'discount' |
      'shopping-bag-8' |
      'shopping-bag-9' |
      'shopping-basket-4' |
      'invoice-3' |
      'shopping-cart-17' |
      'shopping-cart-18' |
      'shopping-cart-19' |
      'money-1' |
      'money-2' |
      'credit-card-2' |
      'discount-1' |
      'money-bag' |
      'shopping-bag-10' |
      'shopping-bag-11' |
      'shopping-basket-5' |
      'invoice-4' |
      'shopping-cart-20' |
      'money-3' |
      'money-4' |
      'credit-card-3' |
      'discount-2' |
      'money-bag-1' |
      'shopping-bag-12' |
      'shopping-bag-13' |
      'shopping-basket-6' |
      'invoice-5' |
      'shopping-cart-21' |
      'shopping-cart-22' |
      'shopping-cart-23' |
      'delivery-truck-2' |
      'voucher' |
      'gift' |
      'gift-1' |
      'shopping-bag-14' |
      'shopping-bag-15' |
      'shopping-basket-7' |
      'invoice-6' |
      'shopping-cart-24' |
      'shopping-cart-25' |
      'shopping-cart-26' |
      'credit-card-4' |
      'package-5' |
      'delivery-truck-3' |
      'online-shop-5' |
      'online-shop-6' |
      'online-shop-7' |
      'online-shop-8' |
      'online-shop-9' |
      'online-shop-10' |
      'online-shop-11' |
      'shopping-bag-16' |
      'shopping-bag-17' |
      'shopping-basket-8' |
      'invoice-7' |
      'shopping-cart-27' |
      'shopping-cart-28' |
      'shopping-cart-29' |
      'list' |
      'pin' |
      'pin-1' |
      'pin-2' |
      'pin-3' |
      'pin-4' |
      'pin-5' |
      'credit-card-5' |
      'microphone' |
      'smartphone' |
      'smartphone-1' |
      'smartphone-2' |
      'smartphone-3' |
      'smartphone-4' |
      'smartphone-5' |
      'smartphone-6' |
      'money-bag-2' |
      'online-shop-12' |
      'online-shop-13' |
      'online-shop-14' |
      'online-shop-15' |
      'online-shop-16' |
      'online-shop-17' |
      'online-shop-18' |
      'package-6' |
      'online-shop-19' |
      'online-shop-20' |
      'online-shop-21' |
      'online-shop-22' |
      'online-shop-23' |
      'online-shop-24' |
      'parking-ticket' |
      'parking-ticket-1' |
      'online-shop-25' |
      'online-shop-26' |
      'online-shop-27' |
      'online-shop-28' |
      'online-shop-29' |
      'online-shop-30' |
      'online-shop-31' |
      'delivery-truck-4' |
      'shopping-bag-18' |
      'shopping-bag-19' |
      'shopping-basket-9' |
      'invoice-8' |
      'shopping-cart-30' |
      'shopping-cart-31' |
      'shopping-cart-32' |
      'money-5' |
      'money-6' |
      'credit-card-6' |
      'discount-3' |
      'money-bag-3' |
      'invoice-9' |
      'invoice-10' |
      'invoice-11' |
      'invoice-12' |
      'invoice-13' |
      'invoice-14' |
      'invoice-15' |
      'invoice-16' |
      'invoice-17' |
      'invoice-18' |
      'invoice-19' |
      'shopping-bag-20' |
      'shopping-bag-21' |
      'shopping-basket-10' |
      'shopping-cart-33' |
      'shopping-cart-34' |
      'shopping-cart-35' |
      'shopping-bag-22' |
      'shopping-bag-23' |
      'shopping-basket-11' |
      'shopping-cart-36' |
      'shopping-cart-37' |
      'shopping-cart-38' |
      'package-7' |
      'shopping-bag-24' |
      'shopping-bag-25' |
      'shopping-basket-12' |
      'invoice-20' |
      'shopping-cart-39' |
      'shopping-cart-40' |
      'shopping-cart-41' |
      'rupee-1' |
      'rupee-2' |
      'credit-card-7' |
      'discount-4' |
      'money-bag-4' |
      'search' |
      'search-1' |
      'search-2' |
      'search-3' |
      'search-4' |
      'package-8' |
      'search-5' |
      'cctv' |
      'package-9' |
      'sign-1' |
      'sign-2' |
      'sign-3' |
      'sign-4' |
      'sign-5' |
      'sign-6' |
      'shop' |
      'online-shop-32' |
      'online-shop-33' |
      'online-shop-34' |
      'online-shop-35' |
      'online-shop-36' |
      'online-shop-37' |
      'online-shop-38' |
      'tag' |
      'tag-1' |
      'tag-2' |
      'tag-3' |
      'tag-4' |
      'tag-5' |
      'tag-6' |
      'tag-7' |
      'tag-8' |
      'tag-9' |
      'tag-10' |
      'tag-11' |
      'delivery-truck-5' |
      'delivery-truck-6' |
      'invoice-21' |
      'invoice-22' |
      'invoice-23' |
      'invoice-24' |
      'invoice-25' |
      'invoice-26' |
      'invoice-27' |
      'invoice-28' |
      'invoice-29' |
      'invoice-30' |
      'invoice-31' |
      'wallet' |
      'wallet-1' |
      'wallet-2' |
      'wallet-3' |
      'wallet-4' |
      'wallet-5' |
      'wallet-6' |
      'wallet-7' |
      'wallet-8' |
      'wallet-9' |
      'wallet-10' |
      'wallet-11' |
      'wallet-12' |
      'watch' |
      'watch-1' |
      'shopping-bags' |
      'shopping-bags-1' |
      'shopping-basket-13' |
      'invoice-32' |
      'shopping-cart-42' |
      'shopping-cart-43' |
      'shopping-cart-44' |
      'yen-1' |
      'yen-2' |
      'credit-card-8' |
      'discount-5' |
      'money-bag-5';

    type iconColors = '#000';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
