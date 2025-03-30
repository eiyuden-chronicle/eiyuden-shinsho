import Header from '@/components/Header.vue'
import { shallowMount } from '@vue/test-utils'

// biome-ignore lint/correctness/noUndeclaredVariables:
describe('Header.vue', () => {
  // biome-ignore lint/correctness/noUndeclaredVariables:
  it('renders props.msg when passed', () => {
    const msg = '百英雄伝攻略真書へようこそ！'
    const wrapper = shallowMount(Header, {
      propsData: { msg },
    })

    // biome-ignore lint/correctness/noUndeclaredVariables:
    expect(wrapper.text()).toMatch(msg)
  })
})
