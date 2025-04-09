import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
 
export default function HomePage() {
  const t = useTranslations('Home');
  return (
    <div className="">
      <h1>{t('title')}</h1>
      <Button>kuay</Button>
    </div>
  );
}