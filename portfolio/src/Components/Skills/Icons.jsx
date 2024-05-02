import React, { useState, useEffect } from 'react';
import * as FontAwesome from 'react-icons/fa';
import * as FontAwesome6 from 'react-icons/fa6';
import * as MaterialIcons from 'react-icons/md';
import * as Ionicons from 'react-icons/io';
import * as FeatherIcons from 'react-icons/fi';
import * as AntDesignIcons from 'react-icons/ai';
import * as BootstrapIcons from 'react-icons/bs';
import * as HeroIcons from 'react-icons/hi';
import * as RemixIcons from 'react-icons/ri';
import * as Typicons from 'react-icons/ti';
import * as Devicons from 'react-icons/di';
import * as BoxIcons from 'react-icons/bi';
import * as SimpleIcons from 'react-icons/si';
import * as Gradients from 'react-icons/gr';
import * as Octicons from 'react-icons/go';
import * as TablerIcons from 'react-icons/tb';
import * as IcoMoonFree from 'react-icons/im';
import * as FluentSystemIcons from 'react-icons/fi';
import * as SimpleLineIcons from 'react-icons/sl';
import * as WeatherIcons from 'react-icons/wi';

const iconLibraries = {
    FontAwesome,
    FontAwesome6,
    MaterialIcons,
    Ionicons,
    FeatherIcons,
    AntDesignIcons,
    BootstrapIcons,
    HeroIcons,
    RemixIcons,
    Typicons,
    Devicons,
    BoxIcons,
    SimpleIcons,
    Gradients,
    Octicons,
    TablerIcons,
    IcoMoonFree,
    FluentSystemIcons,
    SimpleLineIcons,
    WeatherIcons
};

function IconComponent({ iconLibrary, iconName }) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const library = iconLibraries[iconLibrary];
        if (!library) {
            console.error(`Icon library '${iconLibrary}' not supported.`);
            return;
        }

        const Icon = library[iconName];
        if (!Icon) {
            console.error(`Icon '${iconName}' not found in library '${iconLibrary}'.`);
            return;
        }

        setIcon(Icon);
    }, [iconLibrary, iconName]);

    // Devuelve directamente el componente de icono
    return icon ? <icon /> : null;
}

export default IconComponent;