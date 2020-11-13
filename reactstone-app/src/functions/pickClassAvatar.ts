import { 
    avatarDemonhunter, 
    avatarDruid,
    avatarHunter,
    avatarMage,
    avatarNeutral,
    avatarPaladin,
    avatarPriest,
    avatarRogue,
    avatarShaman,
    avatarWarlock,
    avatarWarrior
} from '@images/classes';

interface IClassesAvatar {
    [key: string]: string
}
const classesAvatar: IClassesAvatar = {
    "Demon Hunter": avatarDemonhunter,
    "Druid": avatarDruid,
    "Hunter": avatarHunter,
    "Mage": avatarMage,
    "Neutral": avatarNeutral,
    "Paladin": avatarPaladin,
    "Priest": avatarPriest,
    "Rogue": avatarRogue,
    "Shaman": avatarShaman,
    "Warlock": avatarWarlock,
    "Warrior": avatarWarrior,
}

const pickClassAvatar = (slug: string): string => classesAvatar[slug];

export default pickClassAvatar;