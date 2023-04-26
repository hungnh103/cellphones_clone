import 'styles/components/header.scss'

import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <header>
      <div className='header-wrapper'>
        <div className='header-wrapper__logo'>
          <img src="/images/common/logo.png" alt="logo" />
        </div>

        <form>
          <input type="text" placeholder={t('components.header.form.input_search.placeholder')} />
        </form>

        <select onChange={e => { i18n.changeLanguage(e.target.value) }}>
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
        </select>

        <button>
          {t('components.header.login')}
        </button>
      </div>
    </header>
  )
}

export default Header
