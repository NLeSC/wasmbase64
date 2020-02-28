FROM gitpod/workspace-full
                    
USER gitpod

RUN sudo apt-get -q update && \
    sudo apt-get install -yq build-essential clang-11 lldb clangd-11 lld-11 wabt && \
    sudo rm -rf /var/lib/apt/lists/* &&\
    sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-11 100 &&\
    sudo update-alternatives --install /usr/bin/wasm-ld wasm-ld /usr/bin/wasm-ld-11 100 &&\
    sudo update-alternatives --install /usr/bin/lldb lldb /usr/bin/lldb-11 100 &&\
    sudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-11 100


#RUN sudo mkdir /opt/emsdk && sudo chown gitpod /opt/emsdk && \
#    git clone https://github.com/emscripten-core/emsdk.git /opt/emsdk && \
#    cd /opt/emsdk && \
#    ./emsdk install latest && \
#    ./emsdk activate latest
