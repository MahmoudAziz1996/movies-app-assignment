import React, {useState} from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {LOGO_PATH} from '../../utils/constants';

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

const ClipRRect: React.FC<Props> = ({imageUrl, width, height, rounded}) => {
  const [loading, setLoading] = useState<boolean>(true);

  let imagePath = imageUrl
    ? {uri: `${LOGO_PATH}${imageUrl}`}
    : require('../../images/placeholder.jpeg');
  return (
    <Image
      style={{
        height: height || '100%',
        width: width || '30%',
        borderRadius: rounded ? wp(50) : wp(5),
        borderWidth: 0.5,
        borderColor: '#ddd',
      }}
      onLoad={() => setLoading(false)}
      source={loading ? require('../../images/placeholder.jpeg') : imagePath}
    />
  );
};

export default ClipRRect;
