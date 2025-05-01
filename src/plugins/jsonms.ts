import { inject } from "vue";
import { data, settings, type JmsSectionKey, type JmsLocaleKey, type JmsData } from '@/jms';
import JsonMs, { type JSONmsProvider, type JmsSettings } from '@jsonms/vue3';

const provider = JsonMs<JmsData, JmsSectionKey, JmsLocaleKey>({
  defaultData: data as JmsData,
  defaultLocale: 'en',
  defaultSection: { name: 'default', paths: [] },
  defaultSettings: {
    ...settings as JmsSettings,
    publicUrl: import.meta.env.VITE_JMS_ENDPOINT_URL + '/file/read/',
  }
})

export function useJsonMs() {
  return inject<JSONmsProvider<JmsData, JmsSectionKey, JmsLocaleKey>>('jms', provider.values);
}

export default provider;