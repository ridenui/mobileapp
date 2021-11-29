import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Unraid } from '@ridenui/unraid/dist/instance/unraid';
import { ReactNativeExecutor } from '@ridenui/unraid/dist/executors/ReactNativeSSH';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const unraid = new Unraid({
      executor: ReactNativeExecutor,
      executorConfig: {
        username: 'root',
        password: 'yourpasswordhere',
        host: 'eden.w16.io',
        port: 22
      }
    });
    unraid.system.diskfree().then((value) => {
      setList(value);
    })
  }, []);

  return (
    <SafeAreaView>
      {list.map(disk => {
        return <>
          <Text>FS: {disk.fs} - {disk.used}/{disk.available} @ {disk.mounted}</Text>
        </>
      })}
    </SafeAreaView>
  );
};

export default App;
