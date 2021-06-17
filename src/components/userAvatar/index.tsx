import React from 'react';
import {Image} from 'react-native';
import {Avatar} from 'react-native-paper';

import useAuth from '../../contexts/auth';
import { getUserInitials } from '../../helpers/getUserInitials';
import {globalStyles} from '../../styles/global';

export default function UserAvatar(props) {
  const {user} = useAuth();

  return (
    <>
      {(user.image || props?.source) ? (
        <Avatar.Image
          size={props?.size || 60}
          style={[globalStyles.overflowHidden, props?.style]}
          source={() => {
            return (
              <Image
                style={{height: '100%', width: '100%'}}
                source={props?.source ? {uri: props?.source} : {uri: user.image}}
              />
            );
          }}
        />
      ) : (
        <Avatar.Text
          size={props?.size || 60}
          style={[globalStyles.orangeBackground, props?.style]}
          labelStyle={{lineHeight: props?.size-20 || 40}}
          color="white"
          label={getUserInitials(user.name)}
        />
      )}
    </>
  );
}
