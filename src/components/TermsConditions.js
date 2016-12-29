import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class TermsConditions extends Component {

    render() {
        const { containerStyle, navigationStyle, navigationButtonStyle, navigationTitleStyle } = styles;
        return (
            <View style={containerStyle}>
                <View style={navigationStyle}>
                    <TouchableOpacity onPress={() => Actions.sign_in()}>
                        <Icon name="keyboard-arrow-left" size={30} style={navigationButtonStyle} />
                    </TouchableOpacity>
                    <Text style={navigationTitleStyle}>Terms and conditions</Text>
                </View>
                <ScrollView>
                    <Text style={styles.contentStyle}>
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://lotto.crabstudio.info website (the "Service") operated by Lotto ("us", "we", or "our").

                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.

                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. This Terms and Conditions was created with (TermsFeed).

                    Accounts

                    When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.

                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.

                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.

                    Links To Other Web Sites

                    Our Service may contain links to third-party web sites or services that are not owned or controlled by Lotto.

                    Lotto has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Lotto shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.

                    We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.

                    Termination

                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

                    Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.

                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

                    Governing Law

                    These Terms shall be governed and construed in accordance with the laws of Viet Nam, without regard to its conflict of law provisions.

                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.

                    Changes

                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.

                    Contact Us

                    If you have any questions about these Terms, please contact us.
                </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#009688',
    },
    navigationStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 150, 180, 0.8)',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        height: 60,
        paddingTop: 15,
    },
    navigationButtonStyle: {
        color: '#fff',
        paddingLeft: 15,
    },
    navigationTitleStyle: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 15,
    },
    contentStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
    }
};

export default TermsConditions;
