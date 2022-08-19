import { OauthMicrosoftPage } from '../containers/oauth_microsoft';
import { OauthLinkedinPage } from '../containers/oauth_linkedin';
import { NoMatch } from '../containers/NoMatch';

export default [

    {
        path: "/oauthlinkedin",
        Component: OauthLinkedinPage
    },
    {
        path: "/oauthmicrosoft",
        Component: OauthMicrosoftPage
    },
    {
        Component: NoMatch
    }

];