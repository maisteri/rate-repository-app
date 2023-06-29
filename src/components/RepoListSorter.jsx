import { View, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Menu, Divider } from 'react-native-paper'
import Text from './Text'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  menuButton: {
    borderStyle: 'solid',
    padding: Constants.statusBarHeight,
    backgroundColor: theme.colors.menuBarBackGround,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  errorText: {
    marginTop: 5,
  },
})

const MenuButton = (props) => {
  return (
    <Pressable style={styles.menuButton} onPress={props.openMenu}>
      <Text>{props.name}</Text>
    </Pressable>
  )
}

const RepoListSorter = ({ setOrderBy, setOrderDirection }) => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('Latest repositories')

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<MenuButton openMenu={openMenu} name={name} />}
      >
        <Menu.Item
          onPress={() => {
            setOrderBy('CREATED_AT')
            setOrderDirection('DESC')
            setName('Latest repositories')
          }}
          title='Latest repositories'
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE')
            setOrderDirection('DESC')
            setName('Highest rated repositories')
          }}
          title='Highest rated repositories'
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setOrderBy('RATING_AVERAGE')
            setOrderDirection('ASC')
            setName('Lowest rated repositories')
          }}
          title='Lowest rated repositories'
        />
      </Menu>
    </View>
  )
}

export default RepoListSorter
