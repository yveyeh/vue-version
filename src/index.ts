export default class VueVersion {

    /**
     * The class constructor.
     * @return VueVersion
     */
    public constructor(){
        return this;
    }

    /**
     * Returns the full version number or a specified stage release number
     * of the installed Vue.
     * @param _vue The Vue interface or VueConstructor.
     * @param _stage The string value representing the stage of a release.
     * 
     * @return string | number
     */
    public getVersionNumber(_vue: any, _stage?: string) {

        let version: string = _vue.version;
        let stage: string = this.checkStage(_stage);

        if (stage != '') {
            if (stage == 'patch' || stage == 'minor' || stage == 'major') {
                switch (stage) {
                    case 'patch':
                        return Number(version.split('.')[2]);
                    
                    case 'minor':
                        return Number(version.split('.')[1]);
                    
                    case 'major':
                        return Number(version.split('.')[0]);
                
                    default:
                        break;
                }
            } 
            else {
                console.error('[vue-version warn]: @param stage should only be any of the following: ["major", "minor", "patch"].')
            }
        } 
        else {
            return version;
        }

    }


    /**
     * Returns the lowercase string value of the stage.
     * @param _stage The string value representing the stage of a release.
     * 
     * @returns string
     */
    public checkStage(_stage: any): string {
        return typeof(_stage) == 'string' ? _stage.toLowerCase() : '';
    }

}
