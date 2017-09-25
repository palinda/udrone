import { TrackType } from '@defs/track-type';
export class PermissionType {

    private onAuthorizedPermission: any = 'show';
    private onUnauthorizedPermission: any = 'hide';

    @TrackType(Boolean)
    isExcept = false;

    @TrackType(Array)
    permissionGroups: Array<string>;

    constructor(permissions: Array<string>) {
        this.permissionGroups = permissions;
    }
}
