export class PermissionType {

    private onAuthorizedPermission: any = 'show';
    private onUnauthorizedPermission: any = 'hide';

    constructor(private permissions: Array<string>, private isExcept: boolean) {
    }

    public set $onAuthorizedPermission(onAuth: any) {
        this.onAuthorizedPermission = onAuth;
    }

    public set $onUnauthorizedPermission(onUnauth: any) {
        this.onUnauthorizedPermission = onUnauth;
    }

    public get $permissions(): Array<string>{
        return this.permissions;
    }

    public get $isExcept(): boolean {
        return this.isExcept;
    }

    public get $onAuthorizedPermission(): any{
        return this.onAuthorizedPermission;
    }

    public get $onUnauthorizedPermission(): any{
        return this.onUnauthorizedPermission;
    }
}
