import { TYPE_SFX, NOTIFICATION_SFX } from './../utils/audio_datauris';
import { Howl } from 'howler';

export enum SFX {
    TAP,
    NOTIF,
}

class SoundManager {
    private static instance: SoundManager;

    protected sfx: Map<SFX, Howl> = new Map();

    private constructor() {
        this.sfx.set(SFX.TAP, new Howl({
            src: [TYPE_SFX]
        }));
        this.sfx.set(SFX.NOTIF, new Howl({
            src: [NOTIFICATION_SFX]
        }));
    }

    public static getInstance(): SoundManager {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }

        return SoundManager.instance;
    }

    public static playTap() {
        this.getInstance().sfx.get(SFX.TAP)?.play();
    }
    public static playNotif() {
        this.getInstance().sfx.get(SFX.NOTIF)?.play();
    }
}

export default SoundManager;