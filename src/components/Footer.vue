<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__left">
          <router-link
            tag="a"
            to="/"
          >
            <img
              class="footer__logo"
              alt="logo"
              src="@/assets/img/logo-light.svg"
            >
          </router-link>

          <div class="footer__rights">
            © 2022 Foodie
          </div>
        </div>

        <div class="footer__right">
          <div class="footer__links">
            <div class="footer__links-title">
              Information
            </div>
            <router-link
              v-for="link in menuLinks"
              :key="link.id"
              tag="a"
              :to="link.path"
              class="footer__link"
              :class="[link.path === currentPath ? 'header__link_active' : '']"
            >
              <div>{{ link.title }}</div>
            </router-link>
          </div>

          <div class="footer__social-media">
            <div class="footer__social-text">
              We're on social media:
            </div>
            <a
              href=""
              class="footer__social-link"
            >
              <img
                src="@/assets/img/vk.svg"
                alt="vk"
              >
            </a>
            <a
              href=""
              class="footer__social-link"
            >
              <img
                src="@/assets/img/telegram.svg"
                alt="telegram"
              >
            </a>
          </div>

          <div class="footer__info">
            <div class="footer__tel">
              +Х (ХХХ) XXX-XX-XX
            </div>
            <div class="footer__time">
              <div class="footer__time-block">
                <div class="footer__time-text">
                  We accept orders
                </div>
                <div class="footer__time-info">
                  from 10:00am to 10:30pm
                </div>
              </div>
              <div class="footer__time-block">
                <div class="footer__time-text">
                  Delivery hours:
                </div>
                <div class="footer__time-info">
                  from 11:00am to 11:30pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import menuLinks from '@/mixins/menuLinks'

export default {
  name: 'Footer',
  mixins: [ menuLinks ],
}
</script>

<style lang="scss" scoped>

.footer {
  width: 100%;
  background-color: #111111;

  .footer__content {
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 40px 20px 20px 20px;

    .footer__left {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .footer__logo {
        width: 150px;
        height: 70px;
        cursor: pointer;
      }
      .footer__rights {
        font-size: 14px;
        font-weight: 500;
        color: white;
        text-transform: uppercase;
      }
    }

    .footer__right {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .footer__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        margin: 0;

        .footer__links-title {
          font-size: 14px;
          font-weight: 600;
          color: white;
          opacity: 0.7;
          text-transform: uppercase;
        }

        .footer__link {
          font-size: 13px;
          font-weight: 600;
          list-style: none;
          color: white;
          text-transform: uppercase;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 2px;
            transition: all 0.7s ease-in-out;
          }

          &.footer__link_active {
            text-decoration: underline;
            text-underline-offset: 2px;
          }
        }
      }

      .footer__social-media {
        .footer__social-text {
          margin-bottom: 5px;

          font-size: 14px;
          font-weight: 600;
          color: white;
          opacity: 0.7;
          text-transform: uppercase;
        }
        .footer__social-link {
          margin-bottom: 5px;

          text-decoration: none;
          cursor: pointer;

          img {
            margin-right: 15px;
            width: 35px;
            height: 35px;
          }
        }
      }
    }

    .footer__info {
      .footer__tel {
        margin-bottom: 20px;

        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
      }
      .footer__time {
        .footer__time-block {
          margin-bottom: 10px;

          .footer__time-text {
            margin-bottom: 5px;

            font-size: 16px;
            font-weight: 300;
            color: #FFFFFF;
            opacity: 0.7;
          }
          .footer__time-info {
            font-size: 17px;
            font-weight: 700;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}

@media(max-width: 991px) {
  .footer {
    .footer__content {
      display: grid;
      grid-template-columns: 100%;
      gap: 30px;
      padding: 40px 5px 20px 5px;

      .footer__left {
        justify-content: center;
        gap: 5px;

        .footer__logo {
          height: 50px;
        }
      }
    }
  }
}

@media(max-width: 600px) {
  .footer {
    .footer__content {
      display: grid;
      grid-template-columns: 100%;
      gap: 30px;

      .footer__left {
        justify-content: center;
        gap: 5px;

        .footer__logo {
          height: 50px;
        }
      }

      .footer__right {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 40px 10px;
      }

      .footer__info {
        .footer__tel {
          margin-bottom: 5px;
        }

        .footer__time {
          .footer__time-block {
            .footer__time-text {
              margin-bottom: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
