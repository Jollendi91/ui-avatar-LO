import { shallowMount } from '@vue/test-utils';
import Avatar from '../src/components/ui-avatar.vue';

describe('ui-avatar.vue', () => {

    describe('When given an image', () => {

        it('Should show the image', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    image: 'fake-image'
                }
            });
            expect(wrapper.props().image).toBe('fake-image');
            expect(wrapper.contains('img')).toBe(true);
            expect(wrapper.find('img').attributes().src).toBe('fake-image');
        });
    });

    describe('When not given an image', () => {

        it('Should show the label icon', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    label: 'Test'
                }
            });
    
            expect(wrapper.contains('p.icon')).toBe(true);
        });
    });

    describe('When not given an image and given a label', () => {

        it('Should show a maximum of 2 letters in the center of the avatar', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    label: 'Test'
                }
            });
    
            const label = wrapper.find('p.icon');
            expect(label.text().length).toBe(2);
            expect(label.text()).toBe('TE');
        });
    });
    
    describe('When given a label', () => {

        it('Should set the tooltip to the label', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    label: 'Test String'
                }
            });
            
            const label = wrapper.find('p.icon');
            expect(label.attributes().title).toBe('Test String');
        });
    });

    describe('When given a state', () => {
        
        it('Should have no indicator circle if in "default" state', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    state: 'default'
                }
            });

            expect(wrapper.contains('.indicator')).toBe(false);
        });

        it('Should set the correct class for the indicator circle', () => {
            const wrapper = shallowMount(Avatar, {
                propsData: {
                    state: 'online'
                }
            });

            expect(wrapper.find('.indicator').attributes().class).toBe('indicator online');

            wrapper.setProps({state: 'available'});
            expect(wrapper.find('.indicator').attributes().class).toBe('indicator available');

            wrapper.setProps({state: 'dnd'});
            expect(wrapper.find('.indicator').attributes().class).toBe('indicator dnd');
        });
    });
});