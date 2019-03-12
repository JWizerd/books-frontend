import { shallowMount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/books/Form.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

describe('Form', () => {
    let wrapper;

    beforeEach(() => {
        // given
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(Vuelidate)
        const router = new VueRouter()

        // when
        wrapper = shallowMount(Form, {
            localVue,
            router
        })
    })

    it('form component properly renders', () => {
        expect(wrapper.is(Form)).toBe(true)
    })

    it('form has all elements needed to construct a book model', () => {
        expect(wrapper.contains('input[name=title]')).toBe(true);
        expect(wrapper.contains('input[name=description]')).toBe(true);
        expect(wrapper.contains('input[name=publication_date]')).toBe(true);
        expect(wrapper.contains('input[name=author_first_name]')).toBe(true);
        expect(wrapper.contains('input[name=author_last_name]')).toBe(true);
    })

    it('form is rendered and is submittable with inputs relating to model props', () => {
        const submit = jest.fn()
        wrapper.vm.submit = submit

        wrapper.find("input[name='title']").setValue("test person")
        wrapper.find("input[name='description']").setValue("test description")
        wrapper.find("input[name='publication_date']").setValue("01/01/2019")
        wrapper.find("input[name='author_first_name']").setValue("test")
        wrapper.find("input[name='author_last_name']").setValue("author")
        wrapper.find("form").trigger("submit.prevent")

        // check that form input was valid and that the form was submitted
        expect(submit).toHaveBeenCalled()
    })
})