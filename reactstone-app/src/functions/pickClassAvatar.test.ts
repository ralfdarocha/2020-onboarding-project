import pickClassAvatar from './pickClassAvatar';
import { avatarDemonhunter } from '@images/classes';

describe('pickClassAvatar', () => {
    it('should return the avatar from the demon hunter class', () => {
        const result = pickClassAvatar('Demon Hunter');
        expect(result).toEqual(avatarDemonhunter);
    });
});