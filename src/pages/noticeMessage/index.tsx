import React from 'react';
import {ScrollView, Image, View} from 'react-native';
import {List, Avatar, Text} from 'react-native-paper';
import {WebView} from 'react-native-webview';

import {style} from './styles';
import {getUserInitials} from '../../helpers/getUserInitials';
import {globalStyles} from '../../styles/global';
import {rippleColor} from '../../theme/constants/style';

export default function NoticeMessage({route}) {
  const {alertData} = route?.params;

  return (
    <ScrollView style={globalStyles.scrollContainer}>
      <List.Section>
        <List.Item
          title={alertData?.message?.author}
          description={alertData?.date}
          rippleColor={rippleColor}
          titleStyle={[globalStyles.bold, {marginLeft: 10}]}
          descriptionStyle={{marginLeft: 10}}
          left={() =>
            alertData?.message?.image ? (
              <Avatar.Image
                size={60}
                style={[globalStyles.overflowHidden]}
                source={() => {
                  return (
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={{uri: alertData?.message?.image}}
                    />
                  );
                }}
              />
            ) : (
              <Avatar.Text
                size={60}
                style={[globalStyles.orangeBackground]}
                labelStyle={{lineHeight: 40}}
                color="white"
                label={getUserInitials(alertData?.message?.author)}
              />
            )
          }
        />
      </List.Section>
      <View style={style.textContainer}>
        <Text style={style.textMessageContent}>
          {alertData?.message?.content}
        </Text>
      </View>
    </ScrollView>
  );
}
