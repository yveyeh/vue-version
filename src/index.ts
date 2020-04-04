/**
  * Provides the installed Vue full version as in (x.y.z) and the individual major (x), minor (y), and patch (z).
  * @author Yufenyuy Veyeh Didier - https://github.com/yveyeh
  * @contributor Ndi Britha Lea - https://github.com/NdiBrithaLea
  * @copyright &copy; 2020 - Tenshnova. https://github.com/yveyeh/vue-versions
  * @license MIT
  * @return VueVersion
  */
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
     * @param { any } _vue The Vue interface or VueConstructor.
     * @param { string | undefined } _stage The stage of a release.
     * @return string
     */
    public getVersionNumber(_vue: any, _stage?: string | undefined): string {

        let version: string = _vue.version;
        let stage: string = this.checkStage(_stage);

        if (stage != '') {
            if (stage == 'patch' || stage == 'minor' || stage == 'major') {
                switch (stage) {
                    case 'patch':
                        return version.split('.')[2];
                    case 'minor':
                        return version.split('.')[1];
                    case 'major':
                        return version.split('.')[0];
                }
            } 
            else {
                let doc_link: string = 'https://github.com/yveyeh/vue-versions/blob/master/README.md';
                console.error(
                    '[vue-versions warn]: ' + 
                    '(parameter) _stage should only be any of the following: ["major", "minor", "patch"].\n  ' +
                    'You can see an example at ' + doc_link + '.'
                );
                return '';
            }
        } 
        else {
            return version;
        }

    }


    /**
     * Returns the lowercase string value of the stage.
     * @param { any } _stage The stage of a release.
     * @return string
     */
    public checkStage(_stage: any): string {
        return typeof(_stage) == 'string' ? _stage.toLowerCase() : '';
    }

}
