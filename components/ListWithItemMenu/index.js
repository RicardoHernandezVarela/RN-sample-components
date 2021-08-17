import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ItemMenu from '../ItemMenu';
import BackToTopButton from '../BackToTopButton';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});

function ListWithItemMenu(props) {
  const {
    data,
    ListItem,
    ListHeaderComponent,
    ListFooterComponent,
    lastIndex,
    optionSelected,
    menuOptions,
    itemSelected,
    itemHeight,
    initialValue,
    underlayColor,
    onMomentumScrollEnd,
    useIcons,
    rightSpace,
  } = props;

  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [contentOffsetY, setContentOffsetY] = React.useState(0);
  const listRef = React.useRef(null);

  return (
    <View style={styles.listContainer}>
      <FlatList
        ref={listRef}
        nestedScrollEnabled={true}
        onScroll={(event) => {
          setContentOffsetY(event.nativeEvent.contentOffset.y);
        }}
        onTouchStart={() => {
          setShowContextMenu(false);
        }}
        data={data}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({item, index}) =>
          ListItem({...item, index}, () => setShowContextMenu(true))
        }
        ListFooterComponent={ListFooterComponent}
        keyExtractor={(item, index) => (item.id ? item.id : index.toString())}
        onMomentumScrollEnd={(event) => {
          if (onMomentumScrollEnd) {
            onMomentumScrollEnd();
          }
        }}
      />

      {/* ITEM MENU */}
      {showContextMenu && !optionSelected && (
        <ItemMenu
          options={menuOptions}
          itemIndex={itemSelected.index}
          itemHeight={itemHeight}
          lastIndex={lastIndex}
          contentOffsetY={contentOffsetY}
          initialValue={initialValue}
          underlayColor={underlayColor}
          useIcons={useIcons}
          rightSpace={rightSpace}
        />
      )}

      {contentOffsetY > 0 && (
        <BackToTopButton
          listRef={listRef.current}
          resetOffset={() => setContentOffsetY(0)}
        />
      )}
    </View>
  );
}

export default ListWithItemMenu;
