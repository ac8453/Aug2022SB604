import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_rBZZeef5z",
    ClientId: "3n8hi044b9r0jcph2ca7u7jfj0"
}

export default new CognitoUserPool(poolData);