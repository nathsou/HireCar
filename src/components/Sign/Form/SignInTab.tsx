import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import HcSecondaryButton from "../../Button/HcSecondaryButton";
import HcInputFormGroup from "../../Form/HcInputFormGroup";
import { SignInTabState, SignInFormDataState } from "../../../redux/signInTab/types";
import { updateSignInEmailInput, updateSignInPasswordInput, submitSignInForm, postSignInForm } from "../../../redux/signInTab/actions";
import { connect } from "react-redux";
import { HcState } from "../../../redux/configureStore";
import { changeSignTab } from "../../../redux/signTabs/actions";
import GoogleSignIn from "../GoogleSignIn";

interface SignInTabProps extends SignInTabState {
    onEmailChange: typeof updateSignInEmailInput,
    onPasswordChange: typeof updateSignInPasswordInput,
    onSignInSubmit: typeof submitSignInForm,
    onTabChange: typeof changeSignTab,
    onPostSignInForm: (data: SignInFormDataState) => void
}

class SignInTab extends Component<SignInTabProps> {

    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.onSignInSubmit();
    }

    public componentDidUpdate(prev_props: Readonly<SignInTabProps>) {
        const { validForm } = this.props;
        if (validForm && !prev_props.validForm) {
            this.props.onPostSignInForm(this.props.form_data);
        }
    }

    public render() {
        const { email_error, password_error } = this.props.form_errors;
        const { email, password } = this.props.form_data;

        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="signin-form">
                    <Form.Row>
                        <HcInputFormGroup
                            md={12} controlId="signInEmail"
                            validationMessage={email_error}
                            label="Email" type="text"
                            placeholder="Veuillez entrer votre email"
                            value={email} onChange={this.props.onEmailChange} />
                    </Form.Row>
                    <Form.Row>
                        <HcInputFormGroup
                            md={12} controlId="signInPassword"
                            validationMessage={password_error}
                            label="Mot de passe" type="password"
                            placeholder="Veuillez entrer votre mot de passe"
                            value={password} onChange={this.props.onPasswordChange} />
                    </Form.Row>
                    <div style={{ marginTop: "15px" }}>
                        <HcSecondaryButton type="submit">Se connecter</HcSecondaryButton>
                    </div>
                    <p>Vous n'avez pas encore de compte ?
                    <span className="link" onClick={() => { this.props.onTabChange('sign_up') }}> Enregistrez-vous.</span>
                    </p>
                </Form>
                <div className="social-media-button-container">
                    <GoogleSignIn />
                </div>
            </div >
        );
    }
}

export default connect(
    (state: HcState) => state.sign_tabs.signin_tab,
    {
        onEmailChange: (e: any) => updateSignInEmailInput(e.target.value),
        onPasswordChange: (e: any) => updateSignInPasswordInput(e.target.value),
        onSignInSubmit: () => submitSignInForm(),
        onTabChange: (active_tab_key: string) => changeSignTab(active_tab_key),
        onPostSignInForm: (data: SignInFormDataState) => postSignInForm(data)
    }
)(SignInTab);