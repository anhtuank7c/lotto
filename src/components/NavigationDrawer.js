import React, { PropTypes, Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import MenuSide from './MenuSide';

const propTypes = {
    navigationState: PropTypes.object,
};

class NavigationDrawer extends Component {
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                type="displace"
                open={state.open}
                onOpen={() => Actions.refresh({ key: state.key, open: true })}
                onClose={() => Actions.refresh({ key: state.key, open: false })}
                content={<MenuSide />}
                tapToClose
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.54, 1 - ratio) },
                })}
                >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;