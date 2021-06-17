import React, {useEffect, useState} from 'react';

import {ScrollView, View, RefreshControl} from 'react-native';
import {Card, Button, FAB} from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {WebView} from 'react-native-webview';

import Slider from '../../components/slider/slider';
import {IAlertPosts} from '../../models/IAlertPosts';
import {alertPosts} from '../../services/posts';
import {globalStyles} from '../../styles/global';
import {style} from './styles';

export default function Announcement({navigation}) {
  const [loadingAlerts, setLoadingAlerts] = useState(true);
  const [refreshingAlerts, setRefreshingAlerts] = useState(false);
  const [warnings, setWarnings] = useState<IAlertPosts[]>([]);
  const [go, setGo] = useState<boolean>(true);
  const [uri, setUri] = useState('');

  useEffect(() => {
    setLoadingAlerts(() => false);
    setRefreshingAlerts(() => false);
  }, [warnings]);

  useEffect(() => {
    getAlertPosts();
  }, []);

  async function getAlertPosts() {
    setLoadingAlerts(() => true);
    const response = await alertPosts();

    setWarnings(prevState => [...prevState, ...response]);
  }

  async function refreshAlertPosts() {
    setRefreshingAlerts(() => true);
    setWarnings(() => []);

    const response = await alertPosts();

    setWarnings(prevState => [...prevState, ...response]);
  }

  function navigateToWeb (warning) {
    setUri(() => warning?.uri); 
    setGo(() => false);
  }

  function getCardColor(warning) {
    return warning.type == 'notice'
      ? 'aqua'
      : globalStyles.orangeBackground.backgroundColor;
  }

  return go ? (
    <ScrollView
      style={globalStyles.scrollContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshingAlerts}
          onRefresh={() => refreshAlertPosts()}
        />
      }>
      <View style={style.cardContainerSpacement}>
        <Slider />
      </View>
      <View>
        <View style={style.cardContainerMargin}>
          {warnings?.length > 0 ? (
            warnings.map((warning, i) => (
              <Card
              onPress={() => {
                warning?.uri ? navigateToWeb(warning) : warning?.message ? navigation.navigate('alert', {alertData: warning}) : setUri(() => '');
              }}
                key={i}
                style={[
                  style.cardMargin,
                  {
                    // borderRadius: 10,
                    backgroundColor: getCardColor(warning),
                    borderColor: getCardColor(warning),
                    shadowColor: getCardColor(warning),
                  },
                ]}>
                <Card.Title
                  titleStyle={globalStyles.whiteText}
                  subtitleStyle={globalStyles.whiteText}
                  title={warning.title}
                  subtitle={warning.date}
                />
              </Card>
            ))
          ) : (
            <View style={{flex: 1}}>
              <View>
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item>
                    {[0, 1, 2, 3, 4].map((x, i) => (
                      <SkeletonPlaceholder.Item
                        backgroundColor="#ebebeb"
                        key={i}
                        width="100%"
                        height={100}
                        borderRadius={5}
                        marginBottom={10}
                      />
                    ))}
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              </View>
            </View>
          )}
        </View>
        <Button
          loading={loadingAlerts}
          onPress={async () => await getAlertPosts()}
          color={globalStyles.orangeBackground.backgroundColor}
          labelStyle={{fontSize: 30}}
          icon="chevron-double-down"></Button>
      </View>
    </ScrollView>
  ) : (
    uri ? 
    <>
    <FAB
    style={style.fab}
    small
    icon="close"
    onPress={() => {
      setGo(() => true);
      setUri(() => '');
    }}
  />
    <WebView source={{uri}} />
    </> : null
  );
}
