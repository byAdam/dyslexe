import React from 'react'
import styles from '../../styles/app.module.scss'
import FloatingButton from './FloatingButton'

export default class ClosedSidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        className={styles['sidebar-floating'] + ' ' + styles['dyslexi-render']}
      >
        <FloatingButton
          icon="settings"
          onClick={() => this.props.setAppState({ sidebar: true })}
        />
        <FloatingButton
          icon={
            this.props.appState.fullscreen ? 'fullscreen-exit' : 'fullscreen'
          }
          onClick={() =>
            this.props.setAppState({
              fullscreen: !this.props.appState.fullscreen
            })
          }
        />
      </div>
    )
  }
}
