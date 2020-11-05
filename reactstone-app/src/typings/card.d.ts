interface ICard {
    cardId: string;
    dbfId: string;
    name: string;
    cardSet: string;
    type: string;
    text?: string | null;
    race?: string;
    playerClass: string;
    locale: string;
    mechanics?: (IMechanics)[] | null;
    health?: number | null;
    img?: string | null;
    imgGold?: string | null;
    artist?: string | null;
    rarity?: string | null;
    cost?: number | null;
    attack?: number | null;
    flavor?: string | null;
    collectible?: boolean | null;
    faction?: string | null;
    multiClassGroup?: string | null;
    classes?: (string)[] | null;
    howToGet?: string | null;
    howToGetGold?: string | null;
    elite?: boolean | null;
}