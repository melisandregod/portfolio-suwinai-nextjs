import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('Home');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}