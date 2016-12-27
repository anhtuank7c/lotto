import React, { PropTypes, Component } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import SideMenu from './SideMenu';
import { openDrawer, closeDrawer } from '../actions';

const propTypes = {
    navigationState: PropTypes.object,
};

class NavigationDrawer extends Component {

    onOpen() {
        this.props.openDrawer();
    }

    onClose() {
        this.props.closeDrawer();
    }

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                type="displace"
                styles={drawerStyles}
                open={this.props.drawerOpen}
                onOpen={() => this.props.openDrawer()}
                onClose={() => this.props.closeDrawer()}
                content={<SideMenu />}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan
                tapToClose
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.54, 1 - ratio) },
                })}
                >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 1 },
    main: { paddingLeft: 1 },
};
NavigationDrawer.propTypes = propTypes;

const mapStateToProps = (state) => {
    const { drawerOpen } = state;
    return { drawerOpen };
};

export default connect(mapStateToProps, {
    openDrawer,
    closeDrawer
})(NavigationDrawer);
