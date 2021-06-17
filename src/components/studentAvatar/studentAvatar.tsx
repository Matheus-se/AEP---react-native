import React from 'react';
import {Image} from 'react-native';
import {Avatar} from 'react-native-paper';

import { getUserInitials } from '../../helpers/getUserInitials';
import {globalStyles} from '../../styles/global';

export default function UserAvatar(props) {

  return (
    <>
      {(props.student?.image) ? (
        <Avatar.Image
          size={props?.size || 60}
          style={[globalStyles.overflowHidden, props?.style]}
          source={() => {
            return (
              <Image
                style={{height: '100%', width: '100%'}}
                source={{uri: props?.student?.image}}
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
          label={getUserInitials(props.student.name)}
        />
      )}
    </>
  );
}
